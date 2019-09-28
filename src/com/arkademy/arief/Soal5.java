/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.arkademy.arief;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.function.Predicate;
import java.util.stream.Stream;

/**
 *
 * @author arief
 */
public class Soal5 {
    
    static void countChar(String input,char charToSearch){
        int x = 0;
        for(char c : input.toCharArray()){
            if ( c == charToSearch ){
                x++;
            }
        }
        
        if (x > 0){
            System.out.println(x);
            return;
        }
        System.out.println("Not Found!");
    }
    
    
    public static void main(String[] args) {
        countChar("arkademy", 'a');
        countChar("javascript", 'x');
    }
}
