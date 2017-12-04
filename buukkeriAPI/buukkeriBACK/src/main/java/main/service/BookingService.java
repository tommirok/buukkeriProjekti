package main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.dao.BookingDAO;
import main.entity.Booking;
import main.entity.Booking_IF;

@Service
public class BookingService {
	
	@Autowired
	private BookingDAO bookingdao;

	public boolean createbooking(Booking bk) {
		return bookingdao.createBooking(bk);
	}

	public boolean deletebooking(Booking bk) {
		return bookingdao.deleteBooking(bk);
	}
/*
	public boolean updatebooking(Booking bk) {
		return bookingdao.;
	}*/

	public Booking_IF[] readBookingByUserId(int user_id) {
		return bookingdao.readBookingsByUserId(user_id);
	}

	public Booking_IF[] readBookingByShiftId(int shift_id) {
		return bookingdao.readBookingsByShiftId(shift_id);
	}

}
