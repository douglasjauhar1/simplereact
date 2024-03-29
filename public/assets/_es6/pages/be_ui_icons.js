/*
 *  Document   : be_ui_icons.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Icons Page
 */

class BeUIIcons {
  /*
     * Icon Search functionality
     *
     */
  static iconSearch () {
    const searchItems = jQuery('.js-icon-list > div')
    let searchValue = ''; let el

    // Disable form submission
    jQuery('.js-form-icon-search').on('submit', () => false)

    // When user types
    jQuery('.js-icon-search').on('keyup', (e) => {
      searchValue = jQuery(e.currentTarget).val().toLowerCase()

      if (searchValue.length > 2) { // If ore than 2 characters, search the icons
        searchItems.hide()

        jQuery('code', searchItems).each((index, element) => {
          el = jQuery(element)

          if (el.text().match(searchValue)) {
            el.parent('div').fadeIn(250)
          }
        })
      } else if (searchValue.length === 0) { // If text was deleted, show all icons
        searchItems.show()
      }
    })
  }

  /*
     * Init functionality
     *
     */
  static init () {
    this.iconSearch()
  }
}

// Initialize when page loads
jQuery(() => { BeUIIcons.init() })
