package com.hyecheon.backend.web.api

import com.hyecheon.backend.core.util.*
import com.querydsl.core.util.*
import org.springframework.http.*
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.*
import java.io.*

/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
@RestController
@RequestMapping("/api/v1/product")
class Product {

	@PostMapping("/image")
	fun uploadImage(file: MultipartFile) = run {
		val saveTemp = file.saveTemp()
		mapOf("data" to saveTemp)
	}

	@DeleteMapping("/image")
	fun deleteImage(path: String) = run {
		FileUtils.delete(File(path))
		ResponseEntity.noContent()
	}
}