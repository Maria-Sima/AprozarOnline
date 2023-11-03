package com.codecool.backend.fileStorage;

import com.codecool.backend.exception.AmazonClientException;
import com.codecool.backend.exception.AmazonServiceException;
import com.codecool.backend.exception.NullRequestException;
import com.codecool.backend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.core.exception.SdkServiceException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.core.sync.ResponseTransformer;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.UUID;


@Service
public class AWSImageServiceImpl implements ImageService {
    private final S3Client s3Client;
    private final ImageRepository imageRepository;
    @Value("${aws.bucket.name}")
    private String bucketName;

    @Autowired
    public AWSImageServiceImpl(S3Client s3Client, ImageRepository imageRepository) {
        this.s3Client = s3Client;
        this.imageRepository = imageRepository;
    }

    @Override
    public String upload(MultipartFile file) throws IOException {
        try {
            if (file.isEmpty())
                throw new NullRequestException("Cannot upload empty file");


            String fileName = file.getOriginalFilename();
            String key = UUID.randomUUID().toString();

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .contentType(file.getContentType())
                    .contentLength(file.getSize())
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromByteBuffer(ByteBuffer.wrap(file.getBytes())));

            return key;
        } catch (SdkServiceException ase) {
            throw new AmazonServiceException("your request made it to Amazon S3, but was rejected with an error response " + ase + ": " + ase.getMessage());
        } catch (SdkClientException ace) {
            throw new AmazonClientException("The client encountered an internal error while trying to communicate with S3 " + ace + ": " + ace.getMessage());

        }
    }

    @Override
    public byte[] download(Long id) {
        try {
            Image image = imageRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Can't retrieve file id [%s]".formatted(id)));
            ResponseBytes<GetObjectResponse> s3Object = s3Client.getObject(
                    GetObjectRequest.builder().bucket(bucketName).key(image.getFileName()).build(), ResponseTransformer.toBytes());
            return s3Object.asByteArray();
        } catch (SdkServiceException ase) {
            throw new AmazonServiceException("your request made it to Amazon S3, but was rejected with an error response " + ase + ": " + ase.getMessage());
        } catch (SdkClientException ace) {
            throw new AmazonClientException("The client encountered an internal error while trying to communicate with S3 " + ace + ": " + ace.getMessage());
        }
    }

}