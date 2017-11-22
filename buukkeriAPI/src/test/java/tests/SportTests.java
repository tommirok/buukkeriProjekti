package tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import main.dao.SportDAO;
import main.dao.SportDAO_IF;
import main.entity.Sport;
import main.entity.Sport_IF;

public class SportTests {
	
	private SportDAO_IF sportDAO;
	private Sport_IF sport;
	private Sport_IF[] sports;
	
	@Before
	public void init() {
		sportDAO = new SportDAO();
		sport = new Sport("Ringette");
		
		assertTrue("newsport(Sport_IF sport): Adding a new sport was not successful", sportDAO.newsport(sport));
	}
	
	@After
	public void end() {
		boolean removed = true;
		assertTrue("deleteSport(): Removing Sport was not successful.",
				sportDAO.delsport(sport));
		sports = sportDAO.getSports();
		for(int i = 0; i<sports.length; i++) {
			if(sport.getName() == sports[i].getName()) {
				removed = false;
			}
		}
		assertTrue("deleteSport(): Removing Sport was not successful - Sport was still in database.",
				removed);
	}
	
	@Test
	public void testGET() {
		assertTrue("getSports(): Sports were not fetched",(sports = sportDAO.getSports()) != null);
		System.out.println(sports[0].getName());
	}
	
	@Test
	public void testCreate() {
		Sport_IF duplicate = sport;
		
		assertFalse("SportDAO: adding duplicate Sport was possible!",
				sportDAO.newsport(duplicate));
		
		
	}
	
	@Test
	public void testRemove() {
		Sport_IF ghost = new Sport("PenkkiurheilunMM");
		assertFalse("SportDAO: deleting ghost Sporr was possible.", sportDAO.delsport(ghost));
	}

}
