package Generics;

public class GenericClass<DT> {
    private DT val;

    public void add(DT x) {
        this.val = x;
    }
    
    public DT getValue() {
        return this.val;
    }
    public static void main(String[] args) {
        GenericClass<Integer> obj = new GenericClass<Integer>();
        obj.add(10  );
        System.out.println(obj.getValue());
    }
}