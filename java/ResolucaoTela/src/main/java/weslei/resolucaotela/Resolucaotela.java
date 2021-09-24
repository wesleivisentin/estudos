
package weslei.resolucaotela;

import java.awt.Dimension;
import java.awt.Toolkit;



public class Resolucaotela {
    public static void main(String[] args){
        Dimension tela = Toolkit.getDefaultToolkit().getScreenSize();
        int lar = (int) tela.getWidth();
        int alt = (int) tela.getHeight();
        System.out.println("A resolução do seu sistema é: "+ lar +"X"+alt);
    }
    
}
