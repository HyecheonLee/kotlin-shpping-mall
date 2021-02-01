package com.hyecheon.backend.core.domain

/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
data class UploadFile(
	val originFileName: String?,
	val contentType: String?,
	val size: Long,
	val path: String
)