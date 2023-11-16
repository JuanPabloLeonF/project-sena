package com.karmelshoes.web.configuration.security;

import com.karmelshoes.web.configuration.security.filter.JwtAuthenticationFilter;
import com.karmelshoes.web.configuration.security.filter.JwtValidationFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
public class SpringSecurityConfiguration {

    private final AuthenticationConfiguration authenticationConfiguration;
    private final static String ADMIN = "ADMIN";
    private final static String USER = "USER";

    public SpringSecurityConfiguration(AuthenticationConfiguration authenticationConfiguration) {
        this.authenticationConfiguration = authenticationConfiguration;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        return http.authorizeRequests(requests ->
                        requests
                                .requestMatchers(HttpMethod.PATCH, "/client/deleteById/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/client/getAll").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/client/getById/{id}").permitAll()
                                .requestMatchers(HttpMethod.POST, "/client/create").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/client/updateAll/{id}").permitAll()
                                .requestMatchers(HttpMethod.GET, "/product/getById/{id}").permitAll()
                                .requestMatchers(HttpMethod.GET, "/product/getAll").permitAll()
                                .requestMatchers(HttpMethod.POST, "/product/create").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.PUT, "/product/update/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.PATCH, "/product/delete/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.PATCH, "/product/updateImg/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.PATCH, "/product/updateSize/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/sales//getByIdClient/{id}").permitAll()
                                .requestMatchers(HttpMethod.GET, "/sales/getAll").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/sales/getById/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/sales/getByDate/{dateString}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/sales/getByPaymentMethod/{paymentMethod}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.POST, "/sales/create/{idShoppingCart}").permitAll()
                                .requestMatchers(HttpMethod.GET, "/sales/getByIdShoppingCart/{id}").hasRole(ADMIN)
                                .requestMatchers(HttpMethod.GET, "/shoppingCart/getAll").permitAll()
                                .requestMatchers(HttpMethod.GET, "/shoppingCart/getById/{id}").permitAll()
                                .requestMatchers(HttpMethod.POST, "/shoppingCart/create/{id}").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/shoppingCart/addProduct/{shoppingCartId}/{productId}").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/shoppingCart/removeProduct/{shoppingCartId}/{productId}").permitAll()
                                .requestMatchers(HttpMethod.DELETE, "/shoppingCart/deleteById/{id}").permitAll()
                                .anyRequest().authenticated()
                )
                .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))
                .addFilter(new JwtValidationFilter(authenticationConfiguration.getAuthenticationManager()))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilterFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}

