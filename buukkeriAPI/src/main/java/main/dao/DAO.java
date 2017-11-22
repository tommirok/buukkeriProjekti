package main.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public abstract class DAO {

	protected Connection myCon;

	public DAO() {
		try {
			Class.forName("com.mysql.jdbc.Driver");

			//TUNNELOI TÄMÄ!
			myCon = DriverManager.getConnection("jdbc:mysql://localhost:2206/vapaatvuorot", "pena", "pena");
		} catch (Exception dBException) {
			System.err.print(dBException);
			System.err.println("Virhe tietokantayhteyden muodostamisessa.");
			System.exit(-1);
		}
	}
/**
 * yhteyden sammutus metodi
 */
	@Override
	protected void finalize() {
		try {
			if (myCon != null)
				myCon.close();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
