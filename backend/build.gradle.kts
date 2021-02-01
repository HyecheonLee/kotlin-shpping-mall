import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

buildscript {
	repositories {
		maven("https://plugins.gradle.org/m2/")
		mavenCentral()
	}

	dependencies {
		classpath("gradle.plugin.com.ewerk.gradle.plugins:querydsl-plugin:1.0.10")
		classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.4.21")
	}
}

plugins {
	id("org.springframework.boot") version "2.4.1"
	id("io.spring.dependency-management") version "1.0.10.RELEASE"
	kotlin("jvm") version "1.4.21"
	kotlin("plugin.spring") version "1.4.21"
	kotlin("plugin.jpa") version "1.4.21"
	kotlin("kapt") version "1.4.21" // annotation processing을 위한 kapt
	idea
}

group = "com.hyecheon"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
//	implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
	implementation("org.springframework.boot:spring-boot-starter-jdbc")
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	compileOnly("org.projectlombok:lombok")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	runtimeOnly("com.h2database:h2")
	annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
	annotationProcessor("org.projectlombok:lombok")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework.security:spring-security-test")
	/**/
	implementation("com.github.gavlyukovskiy:p6spy-spring-boot-starter:1.6.3")
	runtimeOnly("org.mariadb.jdbc:mariadb-java-client")
	/*jwt*/
	implementation("io.jsonwebtoken:jjwt:0.9.1")

	implementation("org.springframework.boot:spring-boot-starter-validation")

	/*query dsl*/
	api("com.querydsl:querydsl-jpa:4.2.2")
	// kapt로 dependency를 지정해 준다.
	// kotlin 코드가 아니라면 kapt 대신 annotationProcessor를 사용한다.
	kapt("com.querydsl:querydsl-apt:4.2.2:jpa") // ":jpa 꼭 붙여줘야 한다!!"
	kapt("org.hibernate.javax.persistence:hibernate-jpa-2.1-api:1.0.2.Final")
	/**/
	// map-struct
	// map-struct Annotation Processor
	implementation("org.mapstruct:mapstruct:1.4.1.Final")
	kapt("org.mapstruct:mapstruct-processor:1.4.1.Final")
	kaptTest("org.mapstruct:mapstruct-processor:1.4.1.Final")
}

idea {
	module {
		val kaptMain = file("build/generated/source/kapt/main")
		sourceDirs.add(kaptMain)
		generatedSourceDirs.add(kaptMain)
	}
}


tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
