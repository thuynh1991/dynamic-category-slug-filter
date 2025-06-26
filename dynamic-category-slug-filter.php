<?php
/*
Plugin Name: Dynamic Category Slug Filter
Description: Automatically generates filter buttons for selected slugs using the REST API.
Version: 1.0
Author: Tony Huynh
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

function dcsf_enqueue_script() {
    wp_enqueue_script(
        'dcsf-script',
        plugins_url('dcsf-script.js', __FILE__),
        array(),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'dcsf_enqueue_script');
