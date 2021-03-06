package main.entity;

/**
 * Service Provider Object
 * @author Roni, Tommi, Marika, Ville
 *
 */
public class SP implements SP_IF{
	private int id;
	private String name;
	private String password;
	private String email;
	private String phone;
/**
 * Empty Constructor
 */
	public SP() {
	}
/**
 * Constructor with parameters
 * @param name Name of the provider
 * @param password Password
 * @param email Email
 * @param phone Telephone number
 */
	public SP(String name, String password, String email, String phone) {
		this.name = name;
		this.password = password;
		this.email = email;
		this.phone = phone;
	}
/**
 * Constructor with parameters
 * @param id ID number
 * @param name Name
 * @param password Password
 * @param email Email
 * @param phone Telephone number
 */
	public SP(int id,String name, String password, String email, String phone) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.email = email;
		this.phone = phone;
	}


/**Getter for name
 * @return name
 */
	public String getName() {
		return name;
	}
	/**setter for name
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**getter for password
	 * @return password
	 */
	public String getPassword() {
		return password;
	}
	/**setter for password
	 * @param password
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	/**getter for email
	 * @return email
	 */
	public String getEmail() {
		return email;
	}
	/**setter for email
	 * @param email
	 */
	public void setEmail(String email) {
		this.email = email;
	}
	/** getter for phone number
	 * @return phone
	 */
	public String getPhone() {
		return phone;
	}
	/**setter for phone number
	 * @param phone
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}
/**getter for ID number
 * @return id
 */
	public int getId() {
		return id;
	}

/**Creates a set of shifts for an Activity
 * @param starth
 * @param startmin
 * @param endh
 * @param endmin
 * @param lenght
 * @param price
 * @param act
 *
	public void createSetOfShifts(int starth, int startmin, int endh, int endmin, int length, double price, Activity_IF act) {
		boolean done = true;
		System.out.println("Looppi alkaa");
		while(done) {
			System.out.println("4Head");
			int tempmin = startmin;
			int temph = starth;
			startmin = startmin + length;
			if(startmin >= 60){
				startmin = startmin - 60;
				starth = starth + 1;
			}
			Shift_IF shift = new Shift(temph+":"+tempmin+"-"+starth+":"+startmin, price, act.getId());
			dao.createShift(shift);
			if(starth == endh && startmin == endmin)
				done = false;

		}
	}*/

}

