package com.ebookstore.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Customer {
	@Id
	private int custId;
	private String custName;
	private String custEmail;
	private String custPass;
	private long custPhone;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int custId, String custName, String custEmail, String custPass, long custPhone) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.custEmail = custEmail;
		this.custPhone = custPhone;
		this.custPass = custPass;
	}
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getCustEmail() {
		return custEmail;
	}
	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}
	public long getCustPhone() {
		return custPhone;
	}
	public void setCustPhone(long custPhone) {
		this.custPhone = custPhone;
	}
	public String getCustPass() {
		return custPass;
	}
	public void setCustPass(String custPass) {
		this.custPass = custPass;
	}
}
