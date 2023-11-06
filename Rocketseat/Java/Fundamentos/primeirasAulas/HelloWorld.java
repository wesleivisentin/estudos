package primeirasAulas;

public class HelloWorld {
    public static void main(String[] args) {

        int dadoDoTipoInt = 10;
        double dadoDoTipoDouble = 3.14;
        float dadoDoTipoFloat = 3.14f;
        long dadoDoTipoLong = 45644628L;
        String dadoDoTipoString = "Colocar o meu texto";
        boolean dadoDoTipoBoolean = false;

        if (dadoDoTipoInt == 11) {
            // sysout
            System.out.println("Entrou no if");
        } else {
            System.out.println("Entrou no else");
        }
    }
}