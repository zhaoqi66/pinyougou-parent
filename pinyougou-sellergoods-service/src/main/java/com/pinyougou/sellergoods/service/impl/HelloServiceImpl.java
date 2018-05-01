package com.pinyougou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.pinyougou.sellergoods.service.HelloService;

@Service
public class HelloServiceImpl implements HelloService{

	@Override
	public String getName() {
		
		return "久而久之！！";
	}

}
