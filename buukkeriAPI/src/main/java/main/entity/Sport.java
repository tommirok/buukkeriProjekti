package main.entity;

public class Sport implements Sport_IF {
	private int ID;
	private String name;
	
	public Sport(String name) {
		this.name = name;
	}
	public Sport() {
		
	}

	public Sport(int iD, String name) {
		ID = iD;
		this.name = name;
	}


	public int getID() {
		return ID;
	}



	public String getName() {
		return name;
	}
	
	
	

}
