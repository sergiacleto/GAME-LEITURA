package com.seuusuario.esseeujali;

import com.seuusuario.esseeujali.controller.UserController;

public class App {
    public static void main(String[] args) {
        UserController userController = new UserController();

        // Registrar um novo usuário
        userController.registerUser("usuario1", "senha123");

        // Realizar login
        boolean loginSuccessful = userController.loginUser("usuario1", "senha123");
        if (loginSuccessful) {
            System.out.println("Login bem-sucedido!");
            int pontos = userController.viewUserPoints("usuario1");
            System.out.println("Pontos do usuário: " + pontos);
        } else {
            System.out.println("Falha no login.");
        }
    }
}
