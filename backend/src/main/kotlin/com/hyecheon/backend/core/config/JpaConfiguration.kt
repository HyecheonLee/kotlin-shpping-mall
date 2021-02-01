package com.hyecheon.backend.core.config

import com.hyecheon.backend.core.domain.entity.*
import com.hyecheon.backend.core.service.*
import org.springframework.context.annotation.*
import org.springframework.data.domain.*
import org.springframework.data.jpa.repository.config.*


/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
class JpaConfiguration(val userService: UserService) {
	@Bean
	fun auditorProvider(): AuditorAware<User> {
		return AuditorAware<User> { userService.getLoggedUser() }
	}
}