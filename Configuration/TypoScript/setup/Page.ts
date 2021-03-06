// Default PAGE object

page = PAGE
page {
    typeNum = 0
    10 = FLUIDTEMPLATE
    10 {
        file.cObject = CASE
        file.cObject {
            key.field = backend_layout
            key.ifEmpty.data = levelfield:-1,backend_layout_next_level,slide
            #key.override.field = backend_layout

            default = TEXT
            default.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_01.html

            pagets__bl1 = TEXT
            pagets__bl1.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_01.html

            pagets__bl2 = TEXT
            pagets__bl2.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_02.html

            pagets__bl3 = TEXT
            pagets__bl3.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_03.html

            pagets__bl4 = TEXT
            pagets__bl4.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_04.html

            pagets__bl5 = TEXT
            pagets__bl5.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_05.html

            pagets__bl6 = TEXT
            pagets__bl6.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_06.html

            pagets__bl7 = TEXT
            pagets__bl7.value = EXT:imhh_t3base/Resources/Private/Templates/Layout_07.html
        }

        templateRootPaths.0 = {$plugin.tx_imhh_t3base.view.templateRootPath}
        layoutRootPaths.0 = {$plugin.tx_imhh_t3base.view.layoutRootPath}
        partialRootPaths.0 = {$plugin.tx_imhh_t3base.view.partialRootPath}

        variables {
            content0 < styles.content.get
            content0.select.where = colPos=0
            content0.select.includeRecordsWithoutDefaultTranslation = 1

            content1 < .content0
            content1.select.where = colPos=1

            content2 < .content0
            content2.select.where = colPos=2

            content3 < .content0
            content3.select.where = colPos=3

            content4 < .content0
            content4.select.where = colPos=4

            content5 < .content0
            content5.select.where = colPos=5

            content6 < .content0
            content6.select.where = colPos=6

            content7 < .content0
            content7.select.where = colPos=7

            content8 < .content0
            content8.select.where = colPos=8

            content9 < .content0
            content9.select.where = colPos=9

            content10 < .content0
            content10.select.where = colPos=10

            navigation < lib.navigation
            breadcrumb < lib.breadcrumb
            langswitch < lib.langswitch
            footer < lib.footer
        }

        settings {
            title = {$plugin.tx_imhh_t3base.settings.title}
            domain = {$plugin.tx_imhh_t3base.settings.domain}
            keywords = {$plugin.tx_imhh_t3base.settings.keywords}
            description = {$plugin.tx_imhh_t3base.settings.title}
            base = {$plugin.tx_imhh_t3base.settings.base}
            news_detail = {$plugin.tx_imhh_t3base.settings.news_detail}
            facebook_img = {$plugin.tx_imhh_t3base.settings.facebook_img}
            facebook_locale = {$plugin.tx_imhh_t3base.settings.facebook_locale}
        }
    }

    includeCSS {
        flexslider2 >
        styles = {$plugin.tx_imhh_t3base.settings.files}Css/styles.css
    }

    includeJSFooter {
        scripts = {$plugin.tx_imhh_t3base.settings.files}Js/scripts.js
        scripts.forceOnTop = 1
    }

    includeJSFooterlibs.flexslider2 >

    meta {
        keywords = {$plugin.tx_imhh_t3base.settings.keywords}
        keywords.override.field = keywords

        description = {$plugin.tx_imhh_t3base.settings.description}
        description.override.field  = description

        #distribution = Global
        #rating = General
        robots = all
        #revisit = 7 days
        #resource-type = document
    }

    # den Body die Seiten id mit geben
    bodyTagCObject = TEXT
    bodyTagCObject {
        dataWrap = <body id="page-{field:uid}" class="subpage parent-{field:pid} frontend-{field:layout}" data-langid="{GP:L}">
    }

    headerData.10 = TEXT
    headerData.10.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    headerData.15 = TEXT
    headerData.15.value = <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

    # Neuen title in headerData setzen
    config.noPageTitle = 2
    headerData.20 = TEXT
    headerData.20 {
        field = title // subtitle
        noTrimWrap = |<title>| &raquo; {$plugin.tx_imhh_t3base.settings.title}</title>|
    }

    headerData.25 = TEXT
    headerData.25 {
        field = title // subtitle
        wrap = <meta property="og:locale" content="{$plugin.tx_imhh_t3base.settings.facebook_locale}" /><meta property="og:title" content="|&nbsp;- {$plugin.tx_imhh_t3base.settings.title}" />
    }

    headerData.30 = TEXT
    headerData.30.value = {$plugin.tx_imhh_t3base.settings.facebook_img}
    headerData.30.wrap = <link rel="image_src" href="|" />
       
    headerData.35 < page.headerData.30
    headerData.35.wrap = <meta property="og:image" content="|" />

    headerData.40 = COA
    headerData.40 {
        wrap = <script>var cookieLayer = {|};</script>

        1 = TEXT
        1 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.header
            stdWrap.wrap = header: '|',
        }

        2 = TEXT
        2 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.message
            stdWrap.wrap = message: '|',
        }

        3 = TEXT
        3 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.allow
            stdWrap.wrap = allow: '|',
        }

        4 = TEXT
        4 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.dismiss
            stdWrap.wrap = dismiss: '|',
        }

        5 = TEXT
        5 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.deny
            stdWrap.wrap = deny: '|',
        }

        6 = TEXT
        6 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.link
            stdWrap.wrap = link: '|',
        }

        7 = TEXT
        7 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.message_link
            stdWrap.wrap = messageLink: '|',
        }

        8 = TEXT
        8 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.dismiss_link
            stdWrap.wrap = dismissLink: '|',
        }

        9 = TEXT
        9 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.allow_link
            stdWrap.wrap = allowLink: '|',
        }

        10 = TEXT
        10 {
            data = LLL:EXT:imhh_t3base/Resources/Private/Language/locallang.xlf:cookie_layer.policy
            stdWrap.wrap = policy: '|',
        }

        11 = TEXT
        11 {
            value = href: '{$plugin.tx_imhh_t3base.settings.cookie_layer_href}',
        }
    }

    config{
        index_enable = 1
        index_externals = 1
    }

    shortcutIcon = EXT:imhh_t3base/Resources/Public/Img/favicons/favicon.ico
}

# allow html-Tags in headers of content-elements
lib.stdheader.10.setCurrent.htmlSpecialChars = 0

// display subheader
TCEFORM.tt_content.subheader.disabled = 0

lib.stdheader.20.1.htmlSpecialChars = 0
lib.stdheader.20.2.htmlSpecialChars = 0
lib.stdheader.20.3.htmlSpecialChars = 0
lib.stdheader.20.4.htmlSpecialChars = 0
lib.stdheader.20.5.htmlSpecialChars = 0
lib.stdheader.20.default.htmlSpecialChars = 0

# remove comments
# http://t3n.de/magazin/23-tipps-tricks-schnelleres-typo3-typo3-turbo-edition-225282/3/
config.disablePrefixComment = 1
lib.stdheader.5.prefixComment >
lib.stdheader.stdWrap.prefixComment >
tt_content.stdWrap.prefixComment >
tt_content.stdWrap.prepend >
