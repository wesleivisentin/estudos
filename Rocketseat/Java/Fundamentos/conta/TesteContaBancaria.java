package conta;

public class TesteContaBancaria {
    public static void main(String[] args) {

        ContaBancaria contaBancaria1 = new ContaBancaria();
        contaBancaria1.setNumero("1234");
        contaBancaria1.setTitular("José");

        contaBancaria1.depositar(20);
        contaBancaria1.sacar(20);

    }
}
