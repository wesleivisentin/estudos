package pessoa;

public class TesteDePessoa {

    public static void main(String[] args) {

        Pessoa pessoa1 = new Pessoa();
        pessoa1.setCpf("03786663296");
        pessoa1.setNome("Daniela");
        pessoa1.setIdade(24);

        Pessoa pessoa2 = new Pessoa();
        pessoa2.setCpf("02367789335");
        pessoa2.setNome("Weslei");
        pessoa2.setIdade(28);

        System.out.println(pessoa1.imprimirDadosDaPessoa());
        System.out.println(pessoa2.imprimirDadosDaPessoa());

        Professor professor = new Professor();
        professor.setCpf("03786661111");
        professor.setNome("romeirooo");
        professor.setIdade(24);
        professor.setSalario(5000);
        System.out.println(professor.imprimirDadosDaPessoa());

        Aluno aluno = new Aluno();
        aluno.setCpf("03786666666");
        aluno.setNome("negão");
        aluno.setIdade(15);
        aluno.setMatricula("666");
        System.out.println(aluno.imprimirDadosDaPessoa());

    }
}
