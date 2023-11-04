package com.karmelshoes.persistency.errors.handler;

import com.karmelshoes.persistency.errors.ResponseErrors;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        Map<String, Object> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errors.put(error.getField(), error.getDefaultMessage());
        });
        ResponseErrors responseErrors = new ResponseErrors(status, "Invalida peticion, error en los campos", errors, status.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ResponseErrors> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.BAD_REQUEST, "Ya existe un cliente con el mismo email.", null, HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseErrors);
    }

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<ResponseErrors> handleClientNotFoundException(ObjectNotFoundException ex) {
        ResponseErrors responseErrors = new ResponseErrors(HttpStatus.NOT_FOUND, ex.getMessage(), null, HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseErrors);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    private ResponseErrors handleConstraintViolations(ConstraintViolationException constraintViolationException) {
        Set<ConstraintViolation<?>> violations = constraintViolationException.getConstraintViolations();
        Map<String, Object> errors = new HashMap<>();
        violations.forEach(violation -> {
            errors.put(violation.getPropertyPath().toString(), violation.getMessage());
        });
        return new ResponseErrors(HttpStatus.BAD_REQUEST, "Error de integridad de datos", errors, HttpStatus.BAD_REQUEST.value());
    }
}
