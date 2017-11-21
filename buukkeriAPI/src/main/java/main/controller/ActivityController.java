package main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.entity.Activity;
import main.entity.Activity_IF;
import main.service.ActivityService;
@RestController
@RequestMapping("/act")
public class ActivityController {
	@Autowired
	private ActivityService actservice;
	
	@RequestMapping(method = RequestMethod.GET)
	public Activity_IF[] readActivities() {
		return actservice.readActivities();
	}
	
	@RequestMapping(value ="/{id}" ,method = RequestMethod.GET)
	public Activity_IF ActivityByID(@PathVariable("id")int id) {
		return actservice.getActivityByID(id);
	}
	@RequestMapping(value ="/spid={spid}" ,method = RequestMethod.GET)
	public Activity_IF[] ActivityBySPID(@PathVariable("spid")int spid) {
		return actservice.getActivityBySPID(spid);
	}
	@RequestMapping(method = RequestMethod.POST)
	public boolean createact(Activity act) {
		return actservice.createact(act);
	}
	@RequestMapping(method = RequestMethod.PUT)
	public boolean updateact(Activity act) {
		return actservice.updateact(act);
	}
	@RequestMapping(method = RequestMethod.DELETE)
	public boolean deleteact(Activity act) {
		return actservice.deleteact(act);
	}
}
