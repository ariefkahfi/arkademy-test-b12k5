package com.arkademy.arief;



import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Soal3 {
    
    
    static String sortNumber(String input) throws Exception{
        List<Integer> arr = new ArrayList<>();
        
        for(int i = 0; i<input.toCharArray().length; i++){
            boolean isNumber = Character.isDigit(input.charAt(i));
            if(isNumber) {
                arr.add(Integer.parseInt(String.valueOf(input.charAt(i))));
            }
        }
        
        if(arr.size() <= 0) {
            throw new Exception("No number found in parameter");
        }
        
        
        
        Collections.sort(arr);
        
        
        String a = "";
        
        for(int x : arr){
            a += x;
        }
        
        
        return a;
    }
    
    
    
    
    public static void main(String[] args) {
        try {
            String r = sortNumber("48172a94");
            System.err.println(r);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        }
        
        
        try {
            String r = sortNumber("abc");
            System.err.println(r);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        }
        
        
        try {
            String r = sortNumber("94a");
            System.err.println(r);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        }
    }
}
