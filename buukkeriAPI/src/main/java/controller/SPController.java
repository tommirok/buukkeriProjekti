package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import entity.SP_IF;
import service.SPService;

@RestController
@RequestMapping("/SP")
public class SPController {
	@Autowired
	private SPService spservice;
	
	@RequestMapping(method = RequestMethod.GET)
	public SP_IF[] readSPs() {
		return spservice.readsps();
	}
}
