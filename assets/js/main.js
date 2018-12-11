let country_list = ['Norway', 'Australia', 'Austria', 'Belgium', 'Bulgaria', 'Canada', 'China', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'USA'],
    //categories = ['Startup', 'Jobs', 'Apps', 'Books', 'Productivity', 'Ecommerce', 'E Learning', 'Offers', 'Blog', 'Vlog', 'Technology', 'Science', 'Events', 'Podcast', 'Games', 'UI Design', 'Interior', 'Health', 'Beauty', 'Business',  'Money', 'Influencer', 'Coworking',  'Buy and Sell',  'Classifieds',  'Real Estate',  'Automobile', 'Sports', 'Psychology',  'Relationships', 'Spirituality', 'Art',  'Movies',  'Music', 'Future',  'Programming'],
    categories = [
        {
            category: 'Startup',
            feeds: 1269
        },
        {
            category: 'Jobs',
            feeds: 10269
        },
        {
            category: 'Apps',
            feeds: 1269
        },
        {
            category: 'Books',
            feeds: 1269
        },
        {
            category: 'Productivity',
            feeds: 12869
        },

        {
            category: 'Ecommerce',
            feeds: 12669
        },
        {
            category: 'E Learning',
            feeds: 1269
        },
        {
            category: 'Offers',
            feeds: 1269
        },
        {
            category: 'Blog',
            feeds: 1269
        },
        {
            category: 'Vlog',
            feeds: 1269
        },
        {
            category: 'Technology',
            feeds: 12569
        },
        {
            category: 'Science',
            feeds: 11269
        },
        {
            category: 'Events',
            feeds: 11269
        },
        {
            category: 'Podcast',
            feeds: 1269
        },
        {
            category: 'Games',
            feeds: 11269
        },
        {
            category: 'UI Design',
            feeds: 1123269
        },
        {
            category: 'Interior',
            feeds: 16269
        },
        {
            category: 'Health',
            feeds: 81269
        },
        {
            category: 'Beauty',
            feeds: 134269
        },
        {
            category: 'Business',
            feeds: 12069
        },
        {
            category: 'Money',
            feeds: 18269
        },
        {
            category: 'Influencer',
            feeds: 1269
        },
        {
            category: 'Coworking',
            feeds: 1269
        },
        {
            category: 'Buy and Sell',
            feeds: 1269
        },
        {
            category: 'Classfields',
            feeds: 61269
        },
        {
            category: 'Real Estate',
            feeds: 61269
        },
        {
            category: 'Automobile',
            feeds: 51269
        },
        {
            category: 'Sports',
            feeds: 41269
        },
        {
            category: 'Psychology',
            feeds: 12269
        },
        {
            category: 'Relationships',
            feeds: 1269
        },
        {
            category: 'Spirituality',
            feeds: 12169
        },
        {
            category: 'Art',
            feeds: 1261239
        },
        {
            category: 'Movies',
            feeds: 16326269
        },
        {
            category: 'Music',
            feeds: 325235
        },
        {
            category: 'Future',
            feeds: 432432
        },
        {
            category: 'Programming',
            feeds: 123
        }

    ]
$(document).ready(function(){
    createCountries(country_list);
    createCategories(categories);
    createCategoriesOnCategoryPage(categories);
    clickFunctions();
    $('.desktop-menu-list > li:first-of-type').addClass('active');
    if($('#hidden-menu').length !== 0) {
        scrollbar('#hidden-menu');
    }
    if($('#countries-list').length !== 0) {
        scrollbar('#countries-list');
    }
    
    
});
const scrollbar = (elem) => {
    new PerfectScrollbar(elem, {
        scrollXMarginOffset: 10,
        wheelSpeed: 0.4,
        wheelPropagation: true,
        minScrollbarLength: 6
      });
}
const clickFunctions = () => {
    $('.post-feed-button').on('click', function(){
        $('#modal-feed').remove();
        $('body').append(`
                    <div class="modal fade modal-feed" id="modal-feed" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-body">
                            <div class="left-modal">
                                <div class="left-title">
                                    A place to write your best content
                                </div>
                                <div class="left-bg">
                                    <img src="assets/img/planets.png" />
                                </div>
                                <div class="feedback-block">
                                    <p>Feedback</p>
                                    <span>Mailto: <a href="mailto:info@golivefeed.com">info@golivefeed.com</a></span>
                                </div>
                            </div>
                            <div class="right-modal">
                                <form>
                                    <div class="right-modal-title">
                                        New Feed
                                    </div>
                                    <div class="file-feed-cont">
                                        <input type="file" id="feedFile"/>
                                        <label for="feedFile">
                                            <img src="assets/img/file-img.png" />                                            
                                        </label>
                                        <span class="upload">Upload Picture</span>
                                    </div>
                                    <div class="input-cont clearfix">
                                        <label for="feed-title">Title</label>
                                        <input type="text" id="feed-title" name="feed-title"/>
                                    </div>
                                    <div class="input-cont clearfix">
                                        <label for="feed-descr">Description</label>
                                        <textarea id="feed-descr" name="feed-descr" rows="2"/></textarea>
                                    </div>                                    
                                    <div class="double-input clearfix">
                                        <div class="input-cont clearfix">
                                            <label for="feed-cat">Category</label>
                                            <select name="feed-cat" id="feed-cat">
                                            </select>
                                        </div>
                                        <div class="input-cont clearfix">
                                            <label for="feed-country">Country</label>
                                            <select name="feed-country" id="feed-country">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="post-feed-zone clearfix">
                                     <span class="post-feed-form">
                                        <a href="javascript:void(0)" type="submit">Post Feed</a>
                                     </span>
                                    </div>
                                </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                `);
                createCategoriesModal(categories);
                createCountriesModal(country_list);
                createSelectModal();
                uploadClick = () => {
                    $('.file-feed-cont span.upload').on('click', function(){
                        $(this).addClass('delete').removeClass('upload');
                        $(this).unbind('click');
                        $('#feedFile').trigger('click');
                        
                    })
                }
                uploadClick()
                $('#feedFile').on('change', function() {
                    console.log(1)
                    var sis = $(this);
                    if($(this).val !== '') {
                        $('.file-feed-cont span').text('Delete Picture');
                        $('.file-feed-cont span').addClass('delete');
                        $('.file-feed-cont span.delete').on('click', function(){
                            sis.val('');
                            $('.file-feed-cont span').text('Upload Picture');
                            $(this).removeClass('delete').addClass('upload');
                            
                            $(this).unbind('click');
                            
                            uploadClick();
                        })
                    }
                });
                $('#modal-feed').modal();
    })
    $('.menu-execute').on('click', function() {
        $(this).next().fadeToggle(200);
        $('.countries-execute').next().fadeOut(200).removeClass('opened');
        $(this).next().toggleClass('opened')
    });
    $('.feed-like i').on('click', function() {
       if($(this).hasClass('fa-heart-o')){
        $(this).parent().find('.fa-heart').show()
        $(this).hide()
       } else {
        $(this).parent().find('.fa-heart-o').show()
        $(this).hide()
       }
    });
    $('.countries-execute').on('click', function() {
        $(this).next().fadeToggle(200);
        $('.menu-execute').next().fadeOut(200).removeClass('opened');
        $(this).next().toggleClass('opened')
    });
    $('body').on('click', function(e){
        let menu = $('.menu-execute'),
        country = $('.countries-execute');
       
        if (!country.next().is(e.target) && !$(e.target).closest('.countries-container').length>0 && !country.is(e.target) && !$(e.target).closest('.countries-container').length>0){
            
            country.next().fadeOut(200).removeClass('opened')
        }
        if (!menu.next().is(e.target) && !$(e.target).closest('.menu-more').length>0 && !menu.is(e.target) && !$(e.target).closest('.menu-more').length>0){
            menu.next().fadeOut(200).removeClass('opened')
        }
    });
    $('.menu-toggle-button, .close-button, .backdrop').on('click', function() {
        $('.mobile-menu, .backdrop').toggleClass('moved');
    });
}
const createCategoriesModal = (array) => {
    $.each(array, function(i, elem) {
        $('#feed-cat').append(`
                    <option value="${elem.category}">${elem.category}</option>
        `)
    })   
}
const createCountriesModal = (array) => {
    $.each(array, function(i, elem) {
        $('#feed-country').append(`
                    <option value="${elem}">${elem}</option>
        `)
    })   
}
const createCategoriesOnCategoryPage = (array) => {
    $.each(array, function(i, elem) {
        $('.categories-cont').append(`
                    <div class="live-feed-item">
                        <div class="live-feeds-title">${elem.category}</div>
                        <div class="live-feeds-count">${elem.feeds} live feeds</div>
                    </div>
        `)
    })
}
const createSelectModal = () => {
    $('.modal-feed select').each(function(i, elem){
        var $this = $(elem), numberOfOptions = $(elem).children('option').length;      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select-box-huge"></div>');
        $this.after('<div class="select-styled"><span class="select-text"></span> <span class="select-icon"><img src="assets/img/arrow.png"/></span></div>');    
       
        var $styledSelect = $this.next('div.select-styled');
        $styledSelectText = $styledSelect.find('.select-text')
        $styledSelectText.text($this.children('option').eq(0).text());      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);   
         
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        $this.parent().find('.select-options').attr('id', $this.attr('name') + '-added');
        if($('#'+$this.attr('name') + '-added').length !== 0) {
            scrollbar('#'+$this.attr('name') + '-added');
        }
       
        var $listItems = $list.children('li');      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').fadeOut(250);
            });
            $(this).toggleClass('active').next('ul.select-options').fadeToggle(250);
        });      
        $listItems.click(function(e) {
            e.stopPropagation();
            $(this).parent().prev().find('.select-text').text($(this).text())
            $(this).parent().prev().removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
         
    });
}
const createCountries = (array) => {
    $.each(array, function(i, elem) {
        $('.countries-list').append(`<li><span>${elem}</span></li>`)
    })
}
const createCategories = (array) => {   
    for (i=0; i<array.length; i++) {
        if (i < 5) {
            $('.desktop-menu-list').append(`<li><a href="javascript:void(0)">${array[i].category}</a></li>`)
        } else if (i == 5) {
            $('.desktop-menu-list').append(`<li class="menu-more"><span class="menu-execute">More <i class="fa fa-chevron-down"></i></span><ul class="hidden-menu" id="hidden-menu"></ul></li>`)
        } else {
            $('.menu-more ul').append(`<li><a href="javascript:void(0)">${array[i].category}</a></li>`)
        }
        $('.mobile-menu-list').append(`<li><a href="javascript:void(0)">${array[i].category}</a></li>`)
    }
}
