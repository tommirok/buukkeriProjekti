package tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import main.dao.ActivityDAO;
import main.dao.ActivityDAO_IF;
import main.dao.SPDAO;
import main.dao.SPDAO_IF;
import main.dao.SportDAO;
import main.dao.SportDAO_IF;
import main.entity.Activity;
import main.entity.Activity_IF;
import main.entity.SP;
import main.entity.SP_IF;
import main.entity.Sport;
import main.entity.Sport_IF;

public class ActivityTests {
	
	private static SportDAO_IF sportDAO;
	private static Sport_IF sport;
	private static SP_IF sp;
	private static SPDAO_IF spDAO;
	private static Activity_IF act;
	private static ActivityDAO_IF actDAO;
	
	@BeforeClass
	public static void init() {
		sp = new SP("Testi Pulju OY", "tests1234", "testi.pulju@test.fi", "0007878987");
		spDAO = new SPDAO();
		
		assertTrue("SPDAO: creating test SP failed.",spDAO.createSP(sp));
		
		assertTrue("SPDAO: reading test SP has failed.", (sp = spDAO.readSP(sp.getEmail(), sp.getPassword())) != null);
		sportDAO = new SportDAO();
		sport = new Sport("Ringette");
		
		assertTrue("SportDAO: creating test Sport has failed.", sportDAO.newsport(sport));
		
		Sport_IF[] sports = sportDAO.getSports();
		int index = 0;
		for(int i = 0; i<sports.length; i++) {
			if(sports[i].getName().equals(sport.getName())) {
				sport = sports[i];
				index = i;
			}
		}
		assertEquals("SportDAO: finding test Sport was not successful",sport.getID(),sports[index].getID());
		
		
		act = new Activity("Käpylän avoin ringette jää", sp.getId(),sport.getID(), "Käpylän jääkenttä", "Kaikille avoin ringette vuoro, tervetuloa pelaamaan!");
		actDAO = new ActivityDAO();
		assertTrue("ActivityDAO: adding test Activity has failed", actDAO.createActivity(act));
		Activity_IF[] acts = actDAO.readActivitiesBySPId(sp.getId());
		for(int i = 0; i<acts.length; i++) {
			if(acts[i].getName().equals(act.getName())) {
				act = acts[i];
				index = i;
			}
		}
		
		assertEquals("ActivityDAO: finding test Activity was not successful", act.getId(), acts[index].getId());
	}
	
	@AfterClass
	public static void end() {
		assertTrue("ActivityDAO: deleting test Activity has failed.", actDAO.deleteActivity(act));
		assertTrue("SportDAO: deleting test sport has failed.", sportDAO.delsport(sport));
		assertTrue("SPDAO: deleting test Service Provider has failed.",spDAO.deleteSP(sp));
		
	}
	
	@Test
	public void fake() {
		assertTrue("",true);
	}
	
	

}
