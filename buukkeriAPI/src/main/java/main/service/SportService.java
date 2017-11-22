package main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.dao.SportDAO;
import main.entity.Sport_IF;
@Service
public class SportService {
	
	@Autowired
	private SportDAO sportdao;

	public Sport_IF[] readSports() {
		return sportdao.getSports();
	}

}
