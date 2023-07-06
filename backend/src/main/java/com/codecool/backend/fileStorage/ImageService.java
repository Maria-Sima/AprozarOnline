package com.codecool.backend.fileStorage;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
        public String upload(MultipartFile file) throws IOException;
        public byte[] download(Long id) throws
                IOException;
//    List<byte[]> listByUser(Long id);
    }

