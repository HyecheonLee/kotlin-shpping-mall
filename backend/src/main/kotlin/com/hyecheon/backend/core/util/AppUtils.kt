package com.hyecheon.backend.core.util

import com.hyecheon.backend.core.domain.*
import org.springframework.util.*
import org.springframework.web.multipart.*
import java.io.*
import java.nio.file.*
import java.util.*
import kotlin.io.path.*

/**
 * @author hyecheon
 * @email rainbow880616@gmail.com
 */
const val UPLOAD_PATH = "upload"

fun MultipartFile.extension() = run {
	this.originalFilename?.split(".")?.last()
}

@OptIn(ExperimentalPathApi::class)
fun MultipartFile.saveTemp() = run {
	val uuid = UUID.randomUUID().toString()
	val resourcePath = "${UPLOAD_PATH}/${uuid}.${this.extension()}"
	val file = File(resourcePath)
	val parentPath = Paths.get(resourcePath).parent
	if (parentPath.notExists()) {
		Files.createDirectories(parentPath)
	}
	FileCopyUtils.copy(this.bytes, file)
	UploadFile(originFileName = originalFilename, contentType = this.contentType, size = this.size, path = resourcePath)
}