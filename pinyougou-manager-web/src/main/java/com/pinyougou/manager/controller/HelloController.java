package com.pinyougou.manager.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import com.pinyougou.sellergoods.service.HelloService;

@RestController
@RequestMapping("/hello")
public class HelloController {

	@Reference
	private HelloService helloService;
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/do")
	public String findAll(){			
		return helloService.getName();
	}
	
}
