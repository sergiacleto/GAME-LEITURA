package com.seuusuario.esseeujali.controller;

import com.seuusuario.esseeujali.service.UserService;

public class UserController {
    private UserService userService = new UserService();

    public boolean loginUser(String username, String password) {
        return userService.login(username, password);
    }

    public void registerUser(String username, String password) {
        userService.registerUser(username, password);
    }

    public int viewUserPoints(String username) {
        return userService.getPoints(username);
    }
}
