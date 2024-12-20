package primeirasAulas;

import java.util.HashSet;
import java.util.Set;

public class ColecaoHashSet {
    public static void main(String[] args) {

        Set<Integer> numeros = new HashSet<>();
        numeros.add(10);
        numeros.add(5);
        numeros.add(8);
        numeros.add(15);

        numeros.remove(5);

        System.out.println(numeros.size());

        for (Integer elemento : numeros) {
            System.out.println(elemento);
        }

        System.out.println(numeros.contains(12));
    }
}
