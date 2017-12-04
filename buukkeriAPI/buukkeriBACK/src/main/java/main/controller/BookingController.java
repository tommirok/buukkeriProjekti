package main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.entity.Booking;
import main.entity.Booking_IF;
import main.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService service;
	
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean createbooking(@RequestBody Booking bk) {
		return service.createbooking(bk);
	}
	@RequestMapping(method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean deletebooking(@RequestBody Booking bk) {
		return service.deletebooking(bk);
	}
	@RequestMapping(value ="/user_id={user_ID}" ,method = RequestMethod.GET)
	public Booking_IF[] readBookingsByUserId(@PathVariable("user_ID")int user_id) {
		return service.readBookingByUserId(user_id);
	}
	@RequestMapping(value ="/shift_id={shift_ID}" ,method = RequestMethod.GET)
	public Booking_IF[] readBookingsByShiftId(@PathVariable("shift_ID")int shift_id) {
		return service.readBookingByShiftId(shift_id);
	}
	
	/*
	@RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public boolean updatebooking(@RequestBody Booking bk) {
		return service.updatebooking(bk);
	}*/
}
