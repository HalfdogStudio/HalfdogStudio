webpackJsonp([47,170],{299:function(e,n){e.exports="\n\nNowadays, I upgraded my gentoo linux.\n\nI have not synchronoused the portage tree for nearly half of the year. When I came with upgrading my system, I got stuck with a lot of things I've never thought.\n\nLuckily enough, gentoo use a mechanism to incremental upgrade. So I spent days to completely upgrade the system just with the system working properly.\n\nThis is a simple notes. I can't really remember the details.\n\nI'll just write down what I learned from this lesson. To more smoothly upgrade the  system the next time.\n\n## Upgrade The Stable\n\n### Upgrade it\n\nFirst, syncing the portage tree.\n\n    emerge-websync\n\nSelect a good source, if you encounter with something wrong just remove the portage tree in `/usr/portage/`.\n\n<p color='red'>NEVER NEVER FORGET TO READ THE NEWS</p>\n\n    eselect news list\n\nThen, emerge the world. You can edit `/usr/portage/world` to select what you really want. I've play a lot of things I may never explore later, so I just edit it to minimize the time for upgrading.\n\nWe can emerge world now. And, preparing for struggling for hours or days...Always use `--with-bdeps=y`.\n\n    emerge --update --deep --with-bdeps=y @world\n\nAs a alternative, emerge system first.\n\n    emerge --update --deep --with-bdeps=y system\n\nAlways, there exists tons of conflicts and some other problems like licenses and so on.\n\nAs far as I know, one have to solve them step by step.\n\n### Problems\n\nThere may three major problems:\n\n#### Dependency Conflict\n\nCheck if you have emerge softwares are not included in the stable portage tree. Remove it like this:\n\n    emerge --depclean google-chrome\n\nCheck if you've masked some software. Remove them...\n\nRe-emerge.\n\n#### Build or Configure Error\n\nJust search via google. You may re-emerge something portage won't handle properly.\n\nSometimes, this is because you have to rebuild Perl modules.\n\n    perl-cleaner --all -- --exclude=perl-core/Module-CoreList\n\n#### New XXX Need to be Changed to Proceed\n\nUse `--auto-unmask-write` if you know what you are doing.\n\nthen:\n\n    dispatch-conf\n\nor:\n\n    etc-update\n\n## Post Upgrading\n\nYou may want to update the overlay too.\n\n    layman -S\n\nYet another emerge world(If you encounter with problems, refer to the notes above):\n\n    emerge --update --deep --with-bdeps=y @world\n\nRemove orphaned packages.\n\n    emerge --depclean -a\n\nCheck obsolete packages:\n\n    eix-test-obsolete\n\nUpdate configure files:\n\n    etc-update\n\nRebuild broken packages:\n\n    revdep-rebuild\n\nUpdate eix databases:\n\n    eix-update\n\nIf you compile a new kernel(you do not have to), don't forget to:\n\n    emerge @module-rebuild\n\nThat's all, hope this helps.\n"}});
//# sourceMappingURL=47.8f2b0db73e0fb31b64aa.js.map