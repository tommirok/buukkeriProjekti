package dao;

import entity.Booking_IF;
import entity.Shift_IF;

public interface BookingDAO_IF {
	boolean createBooking(Booking_IF bk);
	boolean updateBooking(Shift_IF shift, Booking_IF bk);
	boolean deleteBooking(Booking_IF bk);
	Booking_IF[] readBookingsByUserId(int user_id);
	Booking_IF[] readBookingsByShiftId(int shift_id);

}
