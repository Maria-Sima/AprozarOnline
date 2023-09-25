package com.codecool.backend.users.service;

import com.codecool.backend.exception.EmailFailureException;
import com.codecool.backend.fileStorage.ImageService;
import com.codecool.backend.users.PasswordRequest;
import com.codecool.backend.users.RegistrationRequest;
import com.codecool.backend.users.UpdateRequest;
import com.codecool.backend.users.repository.*;
import com.sun.jdi.request.DuplicateRequestException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service("appUser")
public class AppUserService {

    private final AppUserDao appUserDao;
    private final AppUserDTOMapper userDTOMapper;
    private final PasswordEncoder passwordEncoder;
    private final ImageService imageService;


    @Autowired
    public AppUserService(@Qualifier("jpa") AppUserDao appUserDao, AppUserDTOMapper userDTOMapper, PasswordEncoder passwordEncoder, ImageService imageService ){
        this.appUserDao = appUserDao;
        this.userDTOMapper = userDTOMapper;
        this.passwordEncoder = passwordEncoder;
        this.imageService = imageService;
    }

    public List<AppUserDTO> getAllCustomers() {
        return appUserDao.getAllAppUsers()
                .stream().map(userDTOMapper)
                .collect(Collectors.toList());
    }

    public AppUserDTO getUser(Long id) {
        return appUserDao.getAppUserById(id)
                .map(userDTOMapper)
                .orElseThrow(()->new ResourceNotFoundException());
    }


    public AppUser addUser(RegistrationRequest registrationRequest) {
            String email = registrationRequest.email();

            System.out.println(registrationRequest);
            AppUser appUser = AppUser.builder()
                    .firstName(registrationRequest.firstName())
                    .lastName(registrationRequest.lastName())
                    .email(registrationRequest.email())
                    .password(passwordEncoder.encode(registrationRequest.password()))
                    .appUserRole(AppUserRole.valueOf(registrationRequest.role()))
                    .emailVerified(false)
                    .build();
            appUserDao.addAppUser(appUser);


            return appUser;

    }


    public void deleteCustomerById(Long userId){
        checkIUserExistsOrNot(userId);
        appUserDao.deleteAppUserById(userId);
    }


    private void checkIUserExistsOrNot(Long id){
        if(!appUserDao.isAppUserWithId(id)){
            throw  new ResourceNotFoundException(
                    "customer with id [%s] not found".formatted(id));
        }
    }

    public void updateCustomer(Long userId, UpdateRequest updateRequest){
        AppUser appUser = appUserDao.getAppUserById(userId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Customer with id [%s] not found", userId)
                ));

        boolean isModified = false;

        if (updateRequest.firstname() != null) {
            appUser.setFirstName(updateRequest.firstname());
            isModified = true;
        }

        if (updateRequest.lastname() != null) {
            appUser.setLastName(updateRequest.lastname());
            isModified = true;
        }

        if (updateRequest.email() != null) {
            if (appUserDao.isAppUserWithEmail(updateRequest.email())) {
                throw new DuplicateRequestException("Email already taken");
            }
            appUser.setEmail(updateRequest.email());
            isModified = true;
        }

        if (isModified) {
            appUserDao.updateAppUser(appUser);
        }
    }

    public List<AppUserDTO> getUsersByRole(AppUserRole role){
        return appUserDao.findUsersByRole(role).stream().map(userDTOMapper).collect(Collectors.toList());
    }

    public void uploadProfileImage(Long userId, MultipartFile file){
        try {
            AppUser appUser = appUserDao.getAppUserById(userId)
                    .orElseThrow(() -> new ResourceNotFoundException(
                            String.format("Customer with id [%s] not found", userId)
                    ));
           String url= imageService.upload(file);
            appUser.setProfileImage(url);
            appUserDao.addAppUser(appUser);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public void updatePassword(PasswordRequest passwordRequest,Long userId){
        AppUser appUser = appUserDao.getAppUserById(userId)
                .orElseThrow(() -> new ResourceNotFoundException(
                        String.format("Customer with id [%s] not found", userId)
                ));

        if (passwordEncoder.matches(passwordRequest.oldPassword(),appUser.getPassword())){
            appUser.setPassword(passwordEncoder.encode(passwordRequest.newPassword()));
            appUserDao.addAppUser(appUser);
        }
        else throw new RuntimeException("Passwords don't match");

    }
public void resetPassword(String email,String newPassword){
    Optional<AppUser> opUser = appUserDao.findUserByEmail(email);
    if (opUser.isPresent()) {
        AppUser user = opUser.get();
        user.setPassword(passwordEncoder.encode(newPassword));
        appUserDao.addAppUser(user);
    }
}

public Optional<AppUser> getUserByEmail(String email){
    System.out.println("Does the user exist "+appUserDao.isAppUserWithEmail(email));
    Long test = Long.valueOf(5);
    System.out.println(appUserDao.getAppUserById(test).get().getEmail().getClass()+"=="+email.getClass());
    System.out.println(appUserDao.getAppUserById(test).get().getEmail()+" == "+email+" ? "+Objects.equals(appUserDao.getAppUserById(test).get().getEmail(), email));
       return  appUserDao.findUserByEmail(email);
}

    @Transactional
    public boolean verifyUser(String email) {
        Optional<AppUser> opt = getUserByEmail(email);

        if (opt.isPresent()) {
            AppUser user = opt.get();

            if (!user.isEmailVerified()) {
                user.setEmailVerified(true);
                appUserDao.updateAppUser(user); // Assuming you have an update method
                return true;
            }
        } else {
            throw new ResourceNotFoundException("User doesn't exist");
        }

        return false;
    }

}
