package main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.entity.Sport_IF;
import main.service.SportService;

@RestController
@RequestMapping("/sports")
public class SportController {

	@Autowired
	private SportService sportservice;
	
	@RequestMapping(method = RequestMethod.GET)
	public Sport_IF[] readSports() {
		return sportservice.readSports();
	}
}
