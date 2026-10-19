import re, glob, sys
APPLY = 'apply' in sys.argv

def url(n):
    d = glob.glob(f'{n}_*')[0]
    return f'../{d}/' + ('index.html' if n == '01' else 'code.html')

BTN = {
 '04': {'Proceed to verification': '05'},
 '05': {'Return to login': '01'},
 '06': {'Scan Package QR': '09', 'Navigate to Pickup Dock': '10',
        'Offline Sync Mode': '23', 'Live Dispatch Chat': '14',
        'SOS': '19', 'notifications': '21'},
 '07': {'Accept delivery': '09', 'Decline offer': '06'},
 '08': {'Open pickup checklist': '09', 'View full map route': '10', 'Details': '11'},
 '09': {'Confirm pickup': '10'},
 '10': {'Arrived at Drop-off': '15'},
 '11': {'Chat with recipient': '14', 'Open live navigation': '10', 'Report delivery issue': '13'},
 '12': {'Proceed': '15', 'Contact dispatch support': '14'},
 '16': {'Ready for Next Delivery': '07', 'Return to Command Center': '06', 'Contact Dispatcher': '14'},
 '19': {'Report Road Incident': '13'},
 '20': {'Sign Out': '01'},
 '22': {'Sign Out': '01'},
}
LINK = {
 '06': {'M-Pesa Wallet': '17'},
 '20': {'Language': '22', 'Safety Desk': '19'},
 '21': {'Notification Preferences': '22'},
}
txt = lambda s: ' '.join(re.sub(r'<[^>]+>', ' ', s).split())

for num in sorted(set(BTN) | set(LINK)):
    f = glob.glob(f'{num}_*/code.html')[0]
    h = open(f).read()

    def fixb(m):
        attrs, inner = m.group(1), m.group(2)
        if 'onclick' in attrs: return m.group(0)
        for key, t in BTN.get(num, {}).items():
            if key in txt(inner):
                print(f'{num} button "{key}" -> {t}')
                return '<button' + attrs + ' onclick="location.href=\'' + url(t) + '\'">' + inner + '</button>'
        return m.group(0)

    def fixa(m):
        pre, post, inner = m.groups()
        for key, t in LINK.get(num, {}).items():
            if key in txt(inner):
                print(f'{num} link   "{key}" -> {t}')
                return '<a' + pre + 'href="' + url(t) + '"' + post + '>' + inner + '</a>'
        return m.group(0)

    h = re.sub(r'<button\b([^>]*)>(.*?)</button>', fixb, h, flags=re.S)
    h = re.sub(r'<a\b([^>]*?)href="#"([^>]*)>(.*?)</a>', fixa, h, flags=re.S)
    if APPLY: open(f, 'w').write(h)

print('\nAPPLIED' if APPLY else '\nDRY RUN - nothing changed. Add "apply" to write.')
