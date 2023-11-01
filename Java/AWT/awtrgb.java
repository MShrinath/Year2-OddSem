package AWT;

import java.awt.*;
import java.awt.event.*;

public class awtrgb extends Frame implements ActionListener{
	
	Button r,g,b;
	Color rr,gg,bb;
	
	awtrgb(){
		r=new Button("Red");
		g=new Button("Green");
		b=new Button("Blue");
		
		rr=new Color(255,0,0);
		gg=new Color(0,255,0);
		bb=new Color(0,0,255);
		
		r.setBounds(100,  50, 100, 30);
		g.setBounds(100, 100, 100, 30);
		b.setBounds(100, 150, 100, 30);
		
		r.setBackground(rr);
		g.setBackground(gg);
		b.setBackground(bb);
		
		r.addActionListener(this);
		g.addActionListener(this);
		b.addActionListener(this);
		
		add(r);
		add(g);
		add(b);
		
		setSize(300,250);
		setTitle("RGB");
		setLayout(null);
		setBackground(Color.black);
	}
	
	public static void main(String[] args) {
		awtrgb rgb = new awtrgb();
		rgb.setVisible(true);
	}

	public void actionPerformed(ActionEvent e) {
		if(e.getSource() == r)
			setBackground(rr);
		if(e.getSource() == g)
			setBackground(gg);
		if(e.getSource() == b) 
			setBackground(bb);
	}
}