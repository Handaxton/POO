import java.util.Scanner;

class ValoresQuadados {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double a=0, b=0, c=0;

        System.out.println("Informe o valor de A: ");
        a = sc.nextDouble();
        System.out.println("Informe o valor de B: ");
        b = sc.nextDouble();
        System.out.println("Informe o valor de C: ");
        c = sc.nextDouble();
        double soma = (a+b+c);
        double resultado = soma*soma;
        System.out.println("Resultado = : "+resultado);


    }

}