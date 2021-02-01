package com.hyecheon.backend.core.config

import com.hyecheon.backend.core.util.*
import org.springframework.context.annotation.*
import org.springframework.web.servlet.config.annotation.*
import java.nio.file.*

@Configuration
class MvcConfig : WebMvcConfigurer {
	override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
		exposeDirectory(UPLOAD_PATH, registry)
	}

	private fun exposeDirectory(_dirName: String, registry: ResourceHandlerRegistry) {
		var dirName = _dirName
		val uploadPath: String = Paths.get(dirName).toFile().absolutePath
		if (dirName.startsWith("../")) dirName = dirName.replace("../", "")
		registry.addResourceHandler("/$dirName/**").addResourceLocations("file:/$uploadPath/")
	}
}