package pessoa;

public class TesteDePessoa {

    public static void main(String[] args) {

        Pessoa pessoa1 = new Pessoa();
        pessoa1.cpf = "03786663296";
        pessoa1.nome = "Daniela";
        pessoa1.idade = 24;

        System.out.println(pessoa1.nome);

        Pessoa pessoa2 = new Pessoa();
        pessoa2.cpf = "02367789335";
        pessoa2.nome = "Weslei";
        pessoa2.idade = 28;

        System.out.println(pessoa2.nome);

        System.out.println(pessoa1.imprimirDadosDaPessoa());
        System.out.println(pessoa2.imprimirDadosDaPessoa());
    }
}
