package com.seuusuario.esseeujali.service;

import com.seuusuario.esseeujali.model.User;
import java.util.HashMap;
import java.util.Map;

public class UserService {
    private Map<String, User> users = new HashMap<>();

    public boolean login(String username, String password) {
        User user = users.get(username);
        return user != null && user.getPassword().equals(password);
    }

    public void registerUser(String username, String password) {
        users.put(username, new User(username, password));
    }

    public int getPoints(String username) {
        User user = users.get(username);
        return user != null ? user.getPoints() : 0;
    }
}
