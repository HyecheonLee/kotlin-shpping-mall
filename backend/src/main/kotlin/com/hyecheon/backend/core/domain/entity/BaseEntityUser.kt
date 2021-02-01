package com.hyecheon.backend.core.domain.entity

import org.springframework.data.annotation.*
import org.springframework.data.jpa.domain.support.*
import javax.persistence.*


/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class BaseEntityUser : BaseEntity() {

	@OneToOne
	@CreatedBy
	var createdBy: User? = null

	@OneToOne
	@LastModifiedBy
	var lastModifiedBy: User? = null
}