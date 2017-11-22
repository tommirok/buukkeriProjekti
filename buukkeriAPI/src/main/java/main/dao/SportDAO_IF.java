package main.dao;

import main.entity.Sport_IF;

public interface SportDAO_IF {
public Sport_IF[] getSports();
public boolean newsport(Sport_IF sport);
}
