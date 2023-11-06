import java.util.HashMap;
import java.util.Map;

public class Colecoes {

    public static void main(String[] args) {
        Map<String, Integer> notas = new HashMap<>();
        notas.put("Dani", 9);
        notas.put("Wes", 10);
        notas.put("Romeiro", 5);

        var nota = notas.get("Wes");
        System.out.println(nota);

        for (Map.Entry<String, Integer> entry : notas.entrySet()) {
            String key = entry.getKey();
            Integer value = entry.getValue();

            System.out.println("A chave é " + key + "  e o valor é " + value);
        }

    }
}
