package com.hyecheon.backend.core.web.dto

import com.fasterxml.jackson.databind.*
import com.hyecheon.backend.core.domain.entity.*

/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
data class UserResponseDto(
	val id: Long,
	val username: String,
	val name: String? = null,
	val email: String,
	val profile: String? = null,
	val about: String? = null,
	var roles: List<String> = listOf(),
	val photo: String? = null,
) {
	companion object {
		fun from(user: User) = run {
			UserResponseDto(
				id = user.id!!, username = user.username, name = user.name, email = user.email,
				profile = user.profile, roles = user.roles(), photo = user.photo
			)
		}
	}

	fun toJsonString(): String {
		return ObjectMapper().writeValueAsString(this)
	}
}