package com.grandcircus.ajaxlab.ajaxlab;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ajaxlabcontroller {

	@RequestMapping("/")
	public ModelAndView home() {
		return new ModelAndView("index");
	}
	
	@RequestMapping("/sort")
	public ModelAndView shop() {
		return new ModelAndView("sort");
	}
}
