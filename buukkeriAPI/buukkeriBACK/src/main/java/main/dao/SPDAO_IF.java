package main.dao;

import main.entity.SP_IF;

public interface SPDAO_IF {
	boolean createSP(SP_IF sp);
	boolean updateSP(SP_IF sp);
	boolean deleteSP(SP_IF sp);
	SP_IF[] readSPs();
	SP_IF readSP(String email, String pass);

}
