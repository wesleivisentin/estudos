package primeirasAulas;

import java.util.ArrayList;
import java.util.List;

public class EstruturaDeDados {
    public static void main(String[] args) {

        List<String> nomes = new ArrayList<>();
        nomes.add("Weslei");
        nomes.add("Daniela");
        nomes.add("Romeiro");

        System.out.println(nomes.get(1));

        // percorrer todos da lista:
        for (String nome : nomes) {
            System.out.println("O nome é: " + nome);
        }

        // mais simples
        nomes.forEach(nome -> System.out.println("O nome é: " + nome));

        // Mais simples ainda:
        nomes.forEach(System.out::println);
    }
}
