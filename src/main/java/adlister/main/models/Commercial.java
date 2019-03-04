package adlister.main.models;


public class Commercial {

    private long id;
    private String name;

    public Commercial(){}

    public Commercial(String id, String name){
        this.id = Long.parseLong(id);
        this.name = name;
    }


    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
